import virtualRealityData from "../mockData/virtualRealityData";

export const LeftContainer = ({ image }) => {
    const { src, alt } = image;

    return (
        <div className="virtual_reality__left">
            <img src={src} alt={alt} />
        </div>
    );
};

export const RightContainer = ({ item }) => {
    const { topCta, header, content, bottomCta } = item;
    return (
        <div className="virtual_reality__right">
            <div className="virtual_reality__right_top">
                <a href={topCta}>{topCta}</a>
            </div>
            <div className="virtual_reality__right_center">
                <h2 className="virtual_reality__header">{header}</h2>
                <p className="virtual_reality__content">{content}</p>
            </div>
            <div className="virtual_reality__right_bottom">
                <a href={bottomCta}>{bottomCta}</a>
            </div>
        </div>
    );
};

const VirtualReality = () => {
    return (
        <>
            <LeftContainer image={virtualRealityData.image} />
            <RightContainer item={virtualRealityData} />
        </>
    );
};

export default VirtualReality;