- Dispach redux saga server

```javascript
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(
    Creators.loginRequest({
      url: "https://jsonplaceholder.typicode.com/users",
    })
  );

  store.dispatch(END);

  return await (store as any).sagaTask.toPromise();
});

```
