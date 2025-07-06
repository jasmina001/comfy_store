import { useNavigate } from "react-router-dom"

function SubmitBtn({text}) {
    const navigation=useNavigate()
    const isSubmitting=navigation.state==='isSubmitting'
  return (
    <button className='btn text-primary btn-block uppercase'>{
        isSubmitting?<>
        <span className=" loading loading-spinner">Sending</span>
        </>:text||'submit'
    }</button>
  )
}

export default SubmitBtn