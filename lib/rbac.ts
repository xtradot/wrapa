export type Role =
  | "super-admin"
  | "claims-manager"
  | "claims-officer"
  | "claims-reviewer"
  | "claims-approver"
  | "tenant-admin"
  | "tenant-super-admin"
  | "tenant-product-manager"
  | "tenant-agent-manager"
  | "tenant-finance-manager"
  | "tenant-compliance-officer"
  | "tenant-analyst"
  | "platform-super-admin"
  | "platform-tenant-manager"
  | "platform-support"
  | "platform-analyst"

export type TenantRole =
  | "tenant-super-admin"
  | "tenant-product-manager"
  | "tenant-agent-manager"
  | "tenant-finance-manager"
  | "tenant-compliance-officer"
  | "tenant-analyst"

export type TenantPermission =
  | "products.view"
  | "products.create"
  | "products.edit"
  | "products.delete"
  | "products.approve"
  | "agents.view"
  | "agents.create"
  | "agents.edit"
  | "agents.approve"
  | "agents.commission"
  | "policies.view"
  | "policies.manage"
  | "claims.view"
  | "claims.process"
  | "analytics.view"
  | "analytics.export"
  | "finance.view"
  | "finance.manage"
  | "compliance.view"
  | "compliance.manage"
  | "settings.view"
  | "settings.manage"
  | "users.view"
  | "users.manage"

export type PlatformAdminRole =
  | "platform-super-admin"
  | "platform-tenant-manager"
  | "platform-support"
  | "platform-analyst"

export type PlatformPermission =
  | "platform.tenants.view"
  | "platform.tenants.create"
  | "platform.tenants.edit"
  | "platform.tenants.delete"
  | "platform.tenants.suspend"
  | "platform.users.view"
  | "platform.users.manage"
  | "platform.config.view"
  | "platform.config.manage"
  | "platform.analytics.view"
  | "platform.analytics.export"
  | "platform.audit.view"
  | "platform.audit.export"
  | "platform.support.view"
  | "platform.support.manage"

export type Permission =
  | "claims.view"
  | "claims.review"
  | "claims.approve"
  | "claims.reject"
  | "claims.escalate"
  | "claims.assign"
  | "claims.payout"
  | "claims.audit"
  | "settings.manage"
  | "users.manage"
  | "products.view"
  | "products.create"
  | "products.edit"
  | "products.delete"
  | "products.approve"
  | "agents.view"
  | "agents.create"
  | "agents.edit"
  | "agents.approve"
  | "agents.commission"
  | "policies.view"
  | "policies.manage"
  | "claims.process"
  | "analytics.view"
  | "analytics.export"
  | "finance.view"
  | "finance.manage"
  | "compliance.view"
  | "compliance.manage"
  | "settings.view"
  | "platform.tenants.view"
  | "platform.tenants.create"
  | "platform.tenants.edit"
  | "platform.tenants.delete"
  | "platform.tenants.suspend"
  | "platform.users.view"
  | "platform.users.manage"
  | "platform.config.view"
  | "platform.config.manage"
  | "platform.analytics.view"
  | "platform.analytics.export"
  | "platform.audit.view"
  | "platform.audit.export"
  | "platform.support.view"
  | "platform.support.manage"

export interface User {
  id: string
  name: string
  email: string
  role: Role
  permissions: Permission[]
  approvalLimit?: number // Amount limit for approvals (in Naira)
}

export interface TenantUser {
  id: string
  name: string
  email: string
  role: Exclude<Role, "tenant-admin">
  permissions: Permission[]
  tenantId: string
  tenantName: string
}

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  "super-admin": [
    "claims.view",
    "claims.review",
    "claims.approve",
    "claims.reject",
    "claims.escalate",
    "claims.assign",
    "claims.payout",
    "claims.audit",
    "settings.manage",
    "users.manage",
    "products.view",
    "products.create",
    "products.edit",
    "products.delete",
    "products.approve",
    "agents.view",
    "agents.create",
    "agents.edit",
    "agents.approve",
    "agents.commission",
    "policies.view",
    "policies.manage",
    "claims.process",
    "analytics.view",
    "analytics.export",
    "finance.view",
    "finance.manage",
    "compliance.view",
    "compliance.manage",
    "settings.view",
    "platform.tenants.view",
    "platform.tenants.create",
    "platform.tenants.edit",
    "platform.tenants.delete",
    "platform.tenants.suspend",
    "platform.users.view",
    "platform.users.manage",
    "platform.config.view",
    "platform.config.manage",
    "platform.analytics.view",
    "platform.analytics.export",
    "platform.audit.view",
    "platform.audit.export",
    "platform.support.view",
    "platform.support.manage",
  ],
  "claims-manager": [
    "claims.view",
    "claims.review",
    "claims.approve",
    "claims.reject",
    "claims.escalate",
    "claims.assign",
    "claims.payout",
    "claims.audit",
  ],
  "claims-officer": ["claims.view", "claims.review"],
  "claims-reviewer": ["claims.view", "claims.review", "claims.escalate"],
  "claims-approver": ["claims.view", "claims.approve", "claims.reject"],
  "tenant-admin": [
    "claims.view",
    "claims.approve",
    "claims.reject",
    "claims.assign",
    "settings.manage",
    "users.manage",
  ],
  "tenant-super-admin": [
    "products.view",
    "products.create",
    "products.edit",
    "products.delete",
    "products.approve",
    "agents.view",
    "agents.create",
    "agents.edit",
    "agents.approve",
    "agents.commission",
    "policies.view",
    "policies.manage",
    "claims.view",
    "claims.process",
    "analytics.view",
    "analytics.export",
    "finance.view",
    "finance.manage",
    "compliance.view",
    "compliance.manage",
    "settings.view",
    "settings.manage",
    "users.view",
    "users.manage",
  ],
  "tenant-product-manager": [
    "products.view",
    "products.create",
    "products.edit",
    "products.approve",
    "policies.view",
    "analytics.view",
    "compliance.view",
  ],
  "tenant-agent-manager": [
    "agents.view",
    "agents.create",
    "agents.edit",
    "agents.approve",
    "agents.commission",
    "policies.view",
    "analytics.view",
  ],
  "tenant-finance-manager": [
    "finance.view",
    "finance.manage",
    "agents.commission",
    "policies.view",
    "claims.view",
    "analytics.view",
    "analytics.export",
  ],
  "tenant-compliance-officer": [
    "products.view",
    "agents.view",
    "policies.view",
    "claims.view",
    "compliance.view",
    "compliance.manage",
    "analytics.view",
  ],
  "tenant-analyst": ["products.view", "agents.view", "policies.view", "analytics.view", "analytics.export"],
  "platform-super-admin": [
    "platform.tenants.view",
    "platform.tenants.create",
    "platform.tenants.edit",
    "platform.tenants.delete",
    "platform.tenants.suspend",
    "platform.users.view",
    "platform.users.manage",
    "platform.config.view",
    "platform.config.manage",
    "platform.analytics.view",
    "platform.analytics.export",
    "platform.audit.view",
    "platform.audit.export",
    "platform.support.view",
    "platform.support.manage",
  ],
  "platform-tenant-manager": [
    "platform.tenants.view",
    "platform.tenants.create",
    "platform.tenants.edit",
    "platform.users.view",
    "platform.analytics.view",
    "platform.support.view",
  ],
  "platform-support": [
    "platform.tenants.view",
    "platform.users.view",
    "platform.support.view",
    "platform.support.manage",
  ],
  "platform-analyst": [
    "platform.tenants.view",
    "platform.users.view",
    "platform.analytics.view",
    "platform.analytics.export",
    "platform.audit.view",
  ],
}

export const APPROVAL_LIMITS: Record<Role, number> = {
  "super-admin": Number.POSITIVE_INFINITY,
  "claims-manager": 10000000, // 10M
  "claims-officer": 0, // Can only review, not approve
  "claims-reviewer": 0, // Can only review
  "claims-approver": 5000000, // 5M
  "tenant-admin": 10000000, // 10M
  "tenant-super-admin": Number.POSITIVE_INFINITY,
  "tenant-product-manager": 0,
  "tenant-agent-manager": 0,
  "tenant-finance-manager": 10000000,
  "tenant-compliance-officer": 0,
  "tenant-analyst": 0,
  "platform-super-admin": Number.POSITIVE_INFINITY,
  "platform-tenant-manager": 10000000, // 10M
  "platform-support": 0,
  "platform-analyst": 0,
}

export const TENANT_ROLE_PERMISSIONS: Record<TenantRole, TenantPermission[]> = {
  "tenant-super-admin": [
    "products.view",
    "products.create",
    "products.edit",
    "products.delete",
    "products.approve",
    "agents.view",
    "agents.create",
    "agents.edit",
    "agents.approve",
    "agents.commission",
    "policies.view",
    "policies.manage",
    "claims.view",
    "claims.process",
    "analytics.view",
    "analytics.export",
    "finance.view",
    "finance.manage",
    "compliance.view",
    "compliance.manage",
    "settings.view",
    "settings.manage",
    "users.view",
    "users.manage",
  ],
  "tenant-product-manager": [
    "products.view",
    "products.create",
    "products.edit",
    "products.approve",
    "policies.view",
    "analytics.view",
    "compliance.view",
  ],
  "tenant-agent-manager": [
    "agents.view",
    "agents.create",
    "agents.edit",
    "agents.approve",
    "agents.commission",
    "policies.view",
    "analytics.view",
  ],
  "tenant-finance-manager": [
    "finance.view",
    "finance.manage",
    "agents.commission",
    "policies.view",
    "claims.view",
    "analytics.view",
    "analytics.export",
  ],
  "tenant-compliance-officer": [
    "products.view",
    "agents.view",
    "policies.view",
    "claims.view",
    "compliance.view",
    "compliance.manage",
    "analytics.view",
  ],
  "tenant-analyst": ["products.view", "agents.view", "policies.view", "analytics.view", "analytics.export"],
}

export const PLATFORM_ROLE_PERMISSIONS: Record<PlatformAdminRole, PlatformPermission[]> = {
  "platform-super-admin": [
    "platform.tenants.view",
    "platform.tenants.create",
    "platform.tenants.edit",
    "platform.tenants.delete",
    "platform.tenants.suspend",
    "platform.users.view",
    "platform.users.manage",
    "platform.config.view",
    "platform.config.manage",
    "platform.analytics.view",
    "platform.analytics.export",
    "platform.audit.view",
    "platform.audit.export",
    "platform.support.view",
    "platform.support.manage",
  ],
  "platform-tenant-manager": [
    "platform.tenants.view",
    "platform.tenants.create",
    "platform.tenants.edit",
    "platform.users.view",
    "platform.analytics.view",
    "platform.support.view",
  ],
  "platform-support": [
    "platform.tenants.view",
    "platform.users.view",
    "platform.support.view",
    "platform.support.manage",
  ],
  "platform-analyst": [
    "platform.tenants.view",
    "platform.users.view",
    "platform.analytics.view",
    "platform.analytics.export",
    "platform.audit.view",
  ],
}

export function hasPermission(user: User, permission: Permission): boolean {
  return user.permissions.includes(permission)
}

export function canApproveAmount(user: User, amount: number): boolean {
  const limit = user.approvalLimit ?? APPROVAL_LIMITS[user.role] ?? 0
  return amount <= limit && hasPermission(user, "claims.approve")
}

export function requiresSecondApproval(amount: number): boolean {
  // Maker-checker threshold: Claims above 2M require dual approval
  return amount > 2000000
}

export function requiresManagerApproval(amount: number): boolean {
  // Claims above 5M require manager approval
  return amount > 5000000
}

export function hasTenantPermission(user: TenantUser, permission: Permission): boolean {
  return user.permissions.includes(permission)
}

export function canAccessTenantResource(user: TenantUser, resourceTenantId: string): boolean {
  return user.tenantId === resourceTenantId
}

export function hasPlatformPermission(user: User, permission: PlatformPermission): boolean {
  return user.permissions.includes(permission)
}
