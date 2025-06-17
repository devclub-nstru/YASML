# YASML


In experimental stages as of now






Tentative Features

1. Minimal Boilerplate with Predictable Structure
What to do: Offer a concise API (like Zustand) but enforce some structure for actions and state slices (like Redux Toolkit’s createSlice).

Why: Zustand is minimal but can become chaotic; Redux is structured but verbose.

Tradeoff: Slightly more setup than Zustand, but much less than classic Redux.

2. Fine-Grained Reactivity with Centralized DevTools
What to do: Enable selective subscriptions (Zustand’s strength) so components only re-render on relevant changes, but provide a global devtools panel for time-travel and action/state tracing (Redux’s strength).

Why: Zustand is fast but debugging is limited; Redux is debuggable but less granular.

Tradeoff: More complex internal implementation for tracking and exposing state changes.

3. First-Class Async and Server State Handling
What to do: Integrate async state and server cache patterns (inspired by React Query, but unified with local/global state).

Why: Redux handles async via middleware (extra complexity); Zustand leaves it to the user. Modern apps need built-in async and server-state support.

Tradeoff: More code in the core library, and a steeper learning curve for advanced features.

4. Modular and Composable Stores
What to do: Allow splitting state into modules/domains that can be loaded/unloaded dynamically, but keep a registry for global inspection and debugging.

Why: Zustand is modular but lacks global overview; Redux is centralized but harder to split for code-splitting or micro-frontends.

Tradeoff: Slightly more complex API and internal registry management.

5. Built-in Middleware and Side Effects
What to do: Provide a simple, pluggable middleware system for logging, analytics, persistence, etc., but keep it easy to compose.

Why: Redux has robust middleware; Zustand’s is less mature.

Tradeoff: Must balance extensibility with simplicity.

6. TypeScript-First with Excellent Inference
What to do: Make the API fully type-safe with minimal manual typings, leveraging TypeScript’s inference as much as possible.

Why: Both Zustand and Redux Toolkit have improved here, but there’s still room for better ergonomics.

Tradeoff: Some TypeScript edge cases may require advanced generics, which can be tricky to maintain.

7. Framework-Agnostic Core
What to do: Separate the core state engine from React bindings, allowing future adapters for other frameworks or server-side use.

Why: This is a trend among modern libraries, future-proofing your solution.

Tradeoff: Slightly more abstraction and maintenance, but greater long-term flexibility.

