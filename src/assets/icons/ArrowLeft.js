import iconStyle from './iconStyle.module.css';

function ArrowLeftIcon(){
    return (
        <svg height="16px" width="16px" viewBox="0 0 448 512" className={iconStyle.arrowLeft}>
            <path fill="#000000" fillOpacity="1.0" stroke="#000000" strokeWidth="2.0" strokeOpacity="1.0" strokeMiterlimit="10" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
    )
}

export default ArrowLeftIcon;