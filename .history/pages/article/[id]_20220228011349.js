import { useRouter } from "next/router"
import { getArticle } from "../../containers/httpRequest"

export const getStaticPath = async () => {
    const res = await getArticle()
    const data = await res.json()

    const paths = data.map(det => {
        return {
            params: { id: det.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.param.id
    const res = await fetch('http://api.kabar-media.kg/api/v1/article/' + id)
    const data = await res.json()

    return {
        props: { detail: data}
    }
}

const Details = ({ data }) => {
    const router = useRouter
    console.log(data)
  return (
    <div>Details page</div>
  )
}

export default Details