import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react'

const ProdectCard = () => {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8800/api", requestOptions)
            .then(response => response.json())
            .then(result => setProductList(result))
            .catch(error => console.log('error', error));
    }, [])
    return (
        <>
            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        productList.map((val, key) => (

                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <Card
                                    imgAlt={val.productname}
                                    imgSrc={'./../backend/images'+ val.productimage}  
                                >
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                            {val.producttitle}
                                        </h5>
                                    </a>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {val.productprices}
                                        </span>
                                        <a
                                            href="#"
                                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Add to cart
                                        </a>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default ProdectCard