const url = "/data/";
export async function getProduct(endpoint) {
      try{
        const res = await fetch(url+ endpoint + ".json", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();
        return data;
    }catch(err)
    {
        console.log(err)
    }
       
}