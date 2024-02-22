export default function useProductPrice(productId=""){

const envatoAccessToken = useRuntimeConfig().public.envatoAccessToken;

return  useFetch(`https://api.envato.com/v1/market/item-prices:${productId}.json`, {
  headers: {
    'Authorization': `Bearer ${envatoAccessToken}`
  },
  transform: (data) => data['item-prices']
})
}
