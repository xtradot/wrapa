export type ClaimStatus =
  | "submitted"
  | "under-review"
  | "pending-approval"
  | "pending-second-approval"
  | "pending-manager-approval"
  | "approved"
  | "rejected"
  | "paid"
  | "closed"
  | "escalated"

export type ClaimAction =
  | "submit"
  | "assign"
  | "review"
  | "approve-first"
  | "approve-second"
  | "reject"
  | "request-info"
  | "escalate"
  | "pay"
  | "close"

export interface ClaimWorkflowState {
  claimId: string
  status: ClaimStatus
  amount: number
  assignedTo: string | null
  reviewedBy: string | null
  firstApprovedBy: string | null
  secondApprovedBy: string | null
  rejectedBy: string | null
  history: ClaimAuditEntry[]
}

export interface ClaimAuditEntry {
  id: string
  timestamp: Date
  action: ClaimAction
  actor: {
    id: string
    name: string
    role: string
  }
  fromStatus: ClaimStatus
  toStatus: ClaimStatus
  notes?: string
  ipAddress?: string
  metadata?: Record<string, any>
}

export class ClaimWorkflowEngine {
  canTransition(currentStatus: ClaimStatus, action: ClaimAction, amount: number): boolean {
    const transitions: Record<ClaimStatus, ClaimAction[]> = {
      submitted: ["assign"],
      "under-review": ["review", "request-info", "escalate"],
      "pending-approval": ["approve-first", "reject", "escalate"],
      "pending-second-approval": ["approve-second", "reject", "escalate"],
      "pending-manager-approval": ["approve-second", "reject", "escalate"],
      approved: ["pay"],
      rejected: [],
      paid: ["close"],
      closed: [],
      escalated: ["assign"],
    }

    return transitions[currentStatus]?.includes(action) ?? false
  }

  getNextStatus(currentStatus: ClaimStatus, action: ClaimAction, amount: number): ClaimStatus {
    switch (action) {
      case "assign":
        return "under-review"

      case "review":
        return "pending-approval"

      case "approve-first":
        // Check if second approval needed
        if (amount > 2000000) {
          return amount > 5000000 ? "pending-manager-approval" : "pending-second-approval"
        }
        return "approved"

      case "approve-second":
        return "approved"

      case "reject":
        return "rejected"

      case "request-info":
        return "under-review"

      case "escalate":
        return "escalated"

      case "pay":
        return "paid"

      case "close":
        return "closed"

      default:
        return currentStatus
    }
  }

  createAuditEntry(
    action: ClaimAction,
    fromStatus: ClaimStatus,
    toStatus: ClaimStatus,
    actor: { id: string; name: string; role: string },
    notes?: string,
    metadata?: Record<string, any>,
  ): ClaimAuditEntry {
    return {
      id: `AUD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      action,
      actor,
      fromStatus,
      toStatus,
      notes,
      metadata,
    }
  }
}

export const workflowEngine = new ClaimWorkflowEngine()
