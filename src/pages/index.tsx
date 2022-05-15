import Layout_ from "../components/Layout";
import Calendar from "../components/Calendar";
import { wrapper } from "../store";
import { END } from "redux-saga";
import { Creators } from "../store/login";

function Index() {
  return (
    <>
      <Layout_>
        <Calendar />
      </Layout_>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(
    Creators.loginRequest({
      url: "https://jsonplaceholder.typicode.com/users",
    })
  );

  store.dispatch(END);

  return await (store as any).sagaTask.toPromise();
});

export default Index;
