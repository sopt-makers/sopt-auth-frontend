/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthGoogleCallbackIndexImport } from './routes/auth/google/callback/index'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const LoginErrorIndexLazyImport = createFileRoute('/login-error/')()
const SocialAccountLinkingSocialIndexLazyImport = createFileRoute(
  '/social-account-linking/social/',
)()
const SocialAccountLinkingAuthIndexLazyImport = createFileRoute(
  '/social-account-linking/auth/',
)()
const SignUpSocialIndexLazyImport = createFileRoute('/sign-up/social/')()
const SignUpAuthIndexLazyImport = createFileRoute('/sign-up/auth/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LoginErrorIndexLazyRoute = LoginErrorIndexLazyImport.update({
  id: '/login-error/',
  path: '/login-error/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/login-error/index.lazy').then((d) => d.Route),
)

const SocialAccountLinkingSocialIndexLazyRoute =
  SocialAccountLinkingSocialIndexLazyImport.update({
    id: '/social-account-linking/social/',
    path: '/social-account-linking/social/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/social-account-linking/social/index.lazy').then(
      (d) => d.Route,
    ),
  )

const SocialAccountLinkingAuthIndexLazyRoute =
  SocialAccountLinkingAuthIndexLazyImport.update({
    id: '/social-account-linking/auth/',
    path: '/social-account-linking/auth/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/social-account-linking/auth/index.lazy').then(
      (d) => d.Route,
    ),
  )

const SignUpSocialIndexLazyRoute = SignUpSocialIndexLazyImport.update({
  id: '/sign-up/social/',
  path: '/sign-up/social/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/sign-up/social/index.lazy').then((d) => d.Route),
)

const SignUpAuthIndexLazyRoute = SignUpAuthIndexLazyImport.update({
  id: '/sign-up/auth/',
  path: '/sign-up/auth/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/sign-up/auth/index.lazy').then((d) => d.Route),
)

const AuthGoogleCallbackIndexRoute = AuthGoogleCallbackIndexImport.update({
  id: '/auth/google/callback/',
  path: '/auth/google/callback/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login-error/': {
      id: '/login-error/'
      path: '/login-error'
      fullPath: '/login-error'
      preLoaderRoute: typeof LoginErrorIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up/auth/': {
      id: '/sign-up/auth/'
      path: '/sign-up/auth'
      fullPath: '/sign-up/auth'
      preLoaderRoute: typeof SignUpAuthIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign-up/social/': {
      id: '/sign-up/social/'
      path: '/sign-up/social'
      fullPath: '/sign-up/social'
      preLoaderRoute: typeof SignUpSocialIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/social-account-linking/auth/': {
      id: '/social-account-linking/auth/'
      path: '/social-account-linking/auth'
      fullPath: '/social-account-linking/auth'
      preLoaderRoute: typeof SocialAccountLinkingAuthIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/social-account-linking/social/': {
      id: '/social-account-linking/social/'
      path: '/social-account-linking/social'
      fullPath: '/social-account-linking/social'
      preLoaderRoute: typeof SocialAccountLinkingSocialIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/google/callback/': {
      id: '/auth/google/callback/'
      path: '/auth/google/callback'
      fullPath: '/auth/google/callback'
      preLoaderRoute: typeof AuthGoogleCallbackIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login-error': typeof LoginErrorIndexLazyRoute
  '/sign-up/auth': typeof SignUpAuthIndexLazyRoute
  '/sign-up/social': typeof SignUpSocialIndexLazyRoute
  '/social-account-linking/auth': typeof SocialAccountLinkingAuthIndexLazyRoute
  '/social-account-linking/social': typeof SocialAccountLinkingSocialIndexLazyRoute
  '/auth/google/callback': typeof AuthGoogleCallbackIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login-error': typeof LoginErrorIndexLazyRoute
  '/sign-up/auth': typeof SignUpAuthIndexLazyRoute
  '/sign-up/social': typeof SignUpSocialIndexLazyRoute
  '/social-account-linking/auth': typeof SocialAccountLinkingAuthIndexLazyRoute
  '/social-account-linking/social': typeof SocialAccountLinkingSocialIndexLazyRoute
  '/auth/google/callback': typeof AuthGoogleCallbackIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login-error/': typeof LoginErrorIndexLazyRoute
  '/sign-up/auth/': typeof SignUpAuthIndexLazyRoute
  '/sign-up/social/': typeof SignUpSocialIndexLazyRoute
  '/social-account-linking/auth/': typeof SocialAccountLinkingAuthIndexLazyRoute
  '/social-account-linking/social/': typeof SocialAccountLinkingSocialIndexLazyRoute
  '/auth/google/callback/': typeof AuthGoogleCallbackIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login-error'
    | '/sign-up/auth'
    | '/sign-up/social'
    | '/social-account-linking/auth'
    | '/social-account-linking/social'
    | '/auth/google/callback'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login-error'
    | '/sign-up/auth'
    | '/sign-up/social'
    | '/social-account-linking/auth'
    | '/social-account-linking/social'
    | '/auth/google/callback'
  id:
    | '__root__'
    | '/'
    | '/login-error/'
    | '/sign-up/auth/'
    | '/sign-up/social/'
    | '/social-account-linking/auth/'
    | '/social-account-linking/social/'
    | '/auth/google/callback/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginErrorIndexLazyRoute: typeof LoginErrorIndexLazyRoute
  SignUpAuthIndexLazyRoute: typeof SignUpAuthIndexLazyRoute
  SignUpSocialIndexLazyRoute: typeof SignUpSocialIndexLazyRoute
  SocialAccountLinkingAuthIndexLazyRoute: typeof SocialAccountLinkingAuthIndexLazyRoute
  SocialAccountLinkingSocialIndexLazyRoute: typeof SocialAccountLinkingSocialIndexLazyRoute
  AuthGoogleCallbackIndexRoute: typeof AuthGoogleCallbackIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginErrorIndexLazyRoute: LoginErrorIndexLazyRoute,
  SignUpAuthIndexLazyRoute: SignUpAuthIndexLazyRoute,
  SignUpSocialIndexLazyRoute: SignUpSocialIndexLazyRoute,
  SocialAccountLinkingAuthIndexLazyRoute:
    SocialAccountLinkingAuthIndexLazyRoute,
  SocialAccountLinkingSocialIndexLazyRoute:
    SocialAccountLinkingSocialIndexLazyRoute,
  AuthGoogleCallbackIndexRoute: AuthGoogleCallbackIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login-error/",
        "/sign-up/auth/",
        "/sign-up/social/",
        "/social-account-linking/auth/",
        "/social-account-linking/social/",
        "/auth/google/callback/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/login-error/": {
      "filePath": "login-error/index.lazy.tsx"
    },
    "/sign-up/auth/": {
      "filePath": "sign-up/auth/index.lazy.tsx"
    },
    "/sign-up/social/": {
      "filePath": "sign-up/social/index.lazy.tsx"
    },
    "/social-account-linking/auth/": {
      "filePath": "social-account-linking/auth/index.lazy.tsx"
    },
    "/social-account-linking/social/": {
      "filePath": "social-account-linking/social/index.lazy.tsx"
    },
    "/auth/google/callback/": {
      "filePath": "auth/google/callback/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
