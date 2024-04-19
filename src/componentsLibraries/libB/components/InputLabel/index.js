export default function InputLabel({ labelInput, typeInput }) {
    return (
        <div>
            <div>
                <label className="label" htmlFor={labelInput}></label>
            </div>
            <div>
                <input className="input" type={typeInput} name={labelInput}  placeholder={labelInput} />
            </div>
        </div>
    )
}