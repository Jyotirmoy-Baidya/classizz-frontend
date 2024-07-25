import { color } from '../../constants'

const SubjectBlock = ({ sub }) => {
    return (
        <div className={`text-xs max-w-20 w-fit text-black py-1 px-2 ${color[sub.color].bg} ${color[sub.color].border} border rounded-full`}>{sub.name}</div>
    )
}

export default SubjectBlock;