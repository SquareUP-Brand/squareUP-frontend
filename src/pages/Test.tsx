import { useGetStoreNameQuery } from 'services/generated/shopifyApi';

const Test = () => {

const { data, error, isLoading } = useGetStoreNameQuery();

console.log(data, error, isLoading);

  return <>{JSON.stringify(data)} {error} {isLoading}</>;
};
export default Test;
