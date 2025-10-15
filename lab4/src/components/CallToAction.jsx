import callToActionData from "../mockData/callToActionData";

export const LeftContainer = ({ topCta, header }) => {
    return (
        <div className="call_to_action__left">
            <div className="call_to_action__left_top">
                <a href={topCta}>{topCta}</a>
            </div>
            <div className="call_to_action__content">
                <p className="call_to_action__header">{header}</p>
            </div>
        </div>
    );
};

export const RightContainer = ({ buttonText }) => {
    return (
        <div className="call_to_action__right">
            <button className="call_to_action__btn btn primary-btn">{buttonText}</button>
        </div>
    );
};

const CallToAction = () => {
    return (
        <>
            <LeftContainer topCta={callToActionData.topCta} header={callToActionData.header} />
            <RightContainer buttonText={callToActionData.buttonText} />
        </>
    );
};

export default CallToAction;