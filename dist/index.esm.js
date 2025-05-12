import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useCallback, useMemo, Fragment } from 'react';

function debounce(func, wait) {
    let timeout = null;
    return (...args) => {
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// Update the component signature
const Carousel = ({ data, widthSize, heightSize, controls, duration, containerStyle, itemStyle, }) => {
    const [currentPosition, setCurrentPosition] = React.useState(0);
    currentPosition === data.length - 1;
    const carouselData = data || ["Please pass data props! ..."];
    const controlProps = controls || {
        enabled: false,
        styled: "arrows",
        customStyle: "NA",
    };
    const intervalProp = (duration || 60) * 1000;
    const carouselRun = useCallback(() => {
        if (currentPosition === carouselData.length - 1) {
            return setCurrentPosition(0);
        }
        return setCurrentPosition(currentPosition + 1);
    }, [setCurrentPosition, currentPosition, carouselData]);
    const carouselPrev = useCallback(debounce(() => {
        setCurrentPosition((prev) => Math.max(prev - 1, 0));
    }, 300), []);
    const carouselNext = useCallback(debounce(() => {
        setCurrentPosition((prev) => Math.min(prev + 1, data.length - 1));
    }, 300), []);
    const ArrowButton = ({ direction, onClick, disabled }) => (jsx("button", { onClick: onClick, className: `mine-bts _controls-${direction}`, disabled: disabled, "aria-label": `Go to ${direction === "prev" ? "previous" : "next"} slide` }));
    const SliderItem = ({ item, style }) => {
        const imgStyles = item.imgContent && item.textContent
            ? "mine-item_img"
            : item.imgContent && !item.textContent
                ? "mine-item_img"
                : !item.imgContent && item.textContent
                    ? item.style
                    : "";
        const slider = () => {
            if (item.textContent && item.imgContent) {
                return (jsxs(Fragment, { children: [jsx("div", { className: `mine-item_text-inner_img ${item.innerStyle ? item.innerStyle : ""}`, children: item.text }), jsx("img", { src: item.imgUrl, alt: item.alt })] }));
            }
            else if (item.textContent && !item.imgContent) {
                return (jsx("div", { className: item.innerStyle ? item.innerStyle : "", children: item.text }));
            }
            else if (item.imgContent && !item.textContent) {
                return jsx("img", { src: item.imgUrl, alt: item.alt });
            }
            else {
                return (jsx(Fragment, { children: jsx("p", { children: "No data to fetch ..." }) }));
            }
        };
        return (jsx("div", { className: `mine-item ${imgStyles}`, style: style, children: slider() }));
    };
    const CarouselContainer = ({ data, config, itemStyle, }) => {
        const sliderItem = useMemo(() => data, [data]);
        const arrowStyles = {
            prev: "mine-bts _controls-prev",
            next: "mine-bts _controls-next",
        };
        config.styled === "arrows"
            ? (arrowStyles)
            : (arrowStyles);
        return (jsx(Fragment, { children: sliderItem.map((item, index) => {
                (jsx(ArrowButton, { direction: 'prev', onClick: () => carouselPrev(), disabled: currentPosition === 0 }));
                (jsx(ArrowButton, { direction: 'next', onClick: () => carouselNext(), disabled: currentPosition === data.length - 1 }));
                return (jsx(SliderItem, { item: item, style: Object.assign({ transform: `translate(-${currentPosition * 100}%)`, width: widthSize || "auto", height: heightSize || "auto" }, itemStyle) }, index));
            }) }));
    };
    useCallback((interv) => {
        return setInterval(() => {
            carouselRun();
        }, interv);
    }, [carouselRun]);
    React.useEffect(() => {
        let autoplay = null;
        if (!controlProps.enabled) {
            autoplay = setInterval(carouselRun, intervalProp);
        }
        return () => {
            if (autoplay)
                clearInterval(autoplay);
        };
    }, [controlProps.enabled, carouselRun, intervalProp]);
    return (jsx("div", { className: 'mine-container', style: containerStyle, children: jsx(CarouselContainer, { data: carouselData, config: controlProps, itemStyle: itemStyle }) }));
};

export { debounce, Carousel as default };
//# sourceMappingURL=index.esm.js.map
