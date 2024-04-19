import React from "react";
import Image from "next/image";

export default function ViewGroup({ groups }) {

    return (
        <div className='groups-container'>
            {
                Object.values(groups).map((group, index) => {
                    return (
                        <GroupItem index={index} group={group} />
                    )
                })
            }
        </div >
    )
}

const GroupItem = (props) => {

    return (
        <div key={props.index} className="group" style={{ backgroundColor: props.group.color ? props.group.color : 'rgb(0, 54, 111)' }} >
            <div>
                <Image src={'/groups/img/' + props.group.thumb} alt="group image" width={160} height={192} />
            </div>
            <div className='info-container'>
                <div className='info-section'>
                    <h3 className="info-text">{props.group.name}</h3>
                    {props.group.rules.canEdit && <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z" fill="#FFFFFF" /> </svg>}
                </div>
                <div className='info-section'>
                    {props.group.code && <div style={{ display: 'flex' }}><p className="info-text">{props.group.code}</p> <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" /> </svg></div>}
                    {props.group.rules.canLock && <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" clipRule="evenodd" d="M9.25 16C9.25 14.4812 10.4812 13.25 12 13.25C13.5188 13.25 14.75 14.4812 14.75 16C14.75 17.5188 13.5188 18.75 12 18.75C10.4812 18.75 9.25 17.5188 9.25 16ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25C12.6904 17.25 13.25 16.6904 13.25 16C13.25 15.3096 12.6904 14.75 12 14.75Z" fill="#FFFFFF" /> <path fillRule="evenodd" clipRule="evenodd" d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V9.30277C5.02317 9.31872 4.80938 9.33948 4.60825 9.36652C3.70814 9.48754 2.95027 9.74643 2.34835 10.3483C1.74643 10.9503 1.48754 11.7081 1.36652 12.6082C1.24996 13.4752 1.24998 14.5775 1.25 15.9451V16.0549C1.24998 17.4225 1.24996 18.5248 1.36652 19.3918C1.48754 20.2919 1.74643 21.0497 2.34835 21.6516C2.95027 22.2536 3.70814 22.5125 4.60825 22.6335C5.47522 22.75 6.57754 22.75 7.94513 22.75H16.0549C17.4225 22.75 18.5248 22.75 19.3918 22.6335C20.2919 22.5125 21.0497 22.2536 21.6517 21.6516C22.2536 21.0497 22.5125 20.2919 22.6335 19.3918C22.75 18.5248 22.75 17.4225 22.75 16.0549V15.9451C22.75 14.5775 22.75 13.4752 22.6335 12.6082C22.5125 11.7081 22.2536 10.9503 21.6517 10.3483C21.0497 9.74643 20.2919 9.48754 19.3918 9.36652C18.5248 9.24996 17.4225 9.24998 16.0549 9.25H7.94513C7.52161 9.24999 7.12353 9.24999 6.75 9.25344V8ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z" fill="#FFFFFF" /> </svg>}
                </div>
            </div>
        </div>
    )
}