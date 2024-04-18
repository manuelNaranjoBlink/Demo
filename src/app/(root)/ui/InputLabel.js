export default function InputLabel({ labelInput, typeInput }) {
    return (
        <div>
            <div>
                <label htmlFor={labelInput}></label>
            </div>
            <div>
                <input type={typeInput} name={labelInput}  placeholder={labelInput} />
            </div>
        </div>
    )
}