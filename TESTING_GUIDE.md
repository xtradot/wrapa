# WRAPA Insurance - User Profile & Authentication Quick Reference

## Demo Login Credentials

Use these credentials to test different user roles and their profile pages:

### 1. Claims Officer
- **Email**: `officer@wrapa.com`
- **Password**: `password123`
- **Redirects to**: `/officer`
- **Profile Page**: `/officer/profile`
- **Role**: Claims processing and policy management

### 2. Tenant Agent Manager
- **Email**: `agent@wrapa.com`
- **Password**: `password123`
- **Redirects to**: `/agent`
- **Profile Page**: `/agent/profile`
- **Role**: Insurance agent portal with commission tracking

### 3. Tenant Super Admin
- **Email**: `admin@wrapa.com`
- **Password**: `password123`
- **Redirects to**: `/tenant`
- **Profile Page**: `/tenant/profile`
- **Role**: HMO/Insurance company administrator

### 4. Platform Super Admin
- **Email**: `platform@wrapa.com`
- **Password**: `password123`
- **Redirects to**: `/platform`
- **Profile Page**: `/platform/profile`
- **Role**: WRAPA system administrator

### 5. Customer/Policy Holder
- **Email**: `customer@wrapa.com`
- **Password**: `password123`
- **Redirects to**: `/dashboard`
- **Profile Page**: `/dashboard/profile`
- **Role**: Insurance customer/policy holder

## Feature Walkthrough

### Accessing User Profile
1. Login with any demo account
2. Look for user avatar/name in top-right corner
3. Click the dropdown menu
4. Select "Profile"
5. View and edit personal information

### Editing Profile Information
1. On profile page, click "Edit" button
2. Modify fields (Name, Phone are editable; Email is read-only)
3. Click "Save Changes" to persist updates
4. See success message appear
5. Data is saved to localStorage session

### Logging Out
1. Click user avatar/name in top-right corner
2. Select "Logout" from dropdown
3. See loading indicator
4. Automatically redirected to login page
5. Session is cleared from browser

### Role-Based Features
Each role has unique:
- Dashboard layout and navigation
- Profile page content
- Available features and permissions
- Activity tracking and statistics

## Implementation Details

### Authentication Flow
```
Login Page → Validate Credentials → Role Mapping → Dashboard Redirect
                                          ↓
                            Create Session (localStorage)
                                          ↓
                            Display User Context
```

### Session Management
- Sessions stored in browser localStorage
- Persists across page refreshes
- Cleared on logout
- User data available to all pages via `useAuth()` hook

### Protected Routes
- Use `<ProtectedRoute>` wrapper for sensitive pages
- Automatically redirects unauthorized users to login
- Supports role-based and permission-based access

## Available Hooks & Components

### `useAuth()` Hook
```typescript
const { user, logout, updateProfile, hasPermission, hasRole, isLoading, error } = useAuth()
```

### `<ProtectedRoute>` Component
```typescript
<ProtectedRoute requiredRoles="platform-super-admin">
  <YourComponent />
</ProtectedRoute>
```

## Folder Structure

```
/lib
  └── auth-context.tsx (Main authentication provider)
  └── rbac.ts (Role-based access control)

/app
  /dashboard
    └── profile/page.tsx (Customer profile)
  /agent
    └── profile/page.tsx (Agent profile)
  /tenant
    └── profile/page.tsx (Tenant profile)
  /officer
    └── profile/page.tsx (Officer profile)
  /platform
    └── profile/page.tsx (Platform admin profile)
  /login
    └── login-client.tsx (Login form with demo buttons)

/components
  ├── protected-route.tsx (Route protection wrapper)
  ├── agent-header.tsx (Agent dashboard header)
  ├── platform-header.tsx (Platform dashboard header)
```

## Testing Checklist

- [ ] Login with each of 5 demo accounts
- [ ] Verify correct dashboard redirection for each role
- [ ] Edit profile information for each role
- [ ] Verify "Save Changes" works and shows success message
- [ ] Test logout functionality
- [ ] Verify session persists on page refresh
- [ ] Check error messages on validation
- [ ] Verify loading states appear during operations

## Tips

1. **Clear Session**: Open browser dev tools → Application → Local Storage → Clear "wrapa_session" to test fresh login
2. **Check Role**: Look at localStorage "wrapa_session" to see current user role
3. **Test Permissions**: Each role has different features enabled in RBAC system
4. **Mock Data**: All user data is mocked - good for UI testing before backend integration

## Troubleshooting

### Session Not Persisting
- Check if localStorage is enabled in browser
- Look in browser dev tools → Application → Local Storage

### Can't See User Avatar
- Ensure images are loading (check network tab in dev tools)
- Initials will show as fallback if image fails

### Logout Not Working
- Check browser console for errors
- Make sure localStorage is accessible
- Try clearing cache and refreshing

### Profile Edit Not Saving
- Verify localStorage is not full/disabled
- Check browser console for any errors
- Try different browser if issue persists
