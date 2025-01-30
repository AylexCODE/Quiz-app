import LoadingStyle from '../../vendor/components/LoadingScreen.module.css';

function LoadingScreen(){
    return (
        <div className={LoadingStyle.loaderWrapper}><div className={LoadingStyle.loader}></div></div>
    );
}

export default LoadingScreen;