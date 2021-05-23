export const request = async (URL)=>{
  return fetch(URL,{
    method: 'GET',
    header: {
      'content-type' : 'application/json',
      'Accept': 'application/json',
    },
  }).then(response=> response.json())
    .catch(error=> console.log(error));
}