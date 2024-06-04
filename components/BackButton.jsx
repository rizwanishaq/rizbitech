import {ArrowLeftCircle} from "lucide-react"
import Link from "next/link"
const BackButton = ({text, link}) => {
  return (
    <div>
        <Link href={link} className="text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5"><ArrowLeftCircle size={18} />{text}</Link>
    </div>
  )
}

export default BackButton