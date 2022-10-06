## Memoization in React

    - Different from the classical definition of Memoization
    - It doesn't keep a log of all of the components based on the props you sent in
    - What it does is only compare the previous props to the new props and when those props have changed, it re-renders

## When should you Memoize?

- _CAVEAT_ This method only exists as a performance optimization. Do not rely on it to "prevent" a render, as this can lead to bugs.
- Memo works well when it is provided primitive values for props.
  - It doesn't work so well when you have objects or array for props.
  - Booleans, Numbers, and Strings are going to compare by value but Objects and Arrays are going to compare by references.
  -

## useMemo

-
