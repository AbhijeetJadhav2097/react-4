import { useEffect } from "react"
const Child1 = () => {

    useEffect( () => {
        console.log("child : component has mounted")
      } , [] )

      useEffect( () => {
        return () => {
        console.log("child : component has unmounted")

        } 
      } , [])
  return  <h1>child1</h1>
}

export default Child1