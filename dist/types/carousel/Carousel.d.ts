import React from "react";
import "../styles/Carousel.scss";
interface CarouselProps {
    data: Array<{
        imgUrl?: string;
        alt?: string;
        text?: string;
        imgContent?: boolean;
        textContent?: boolean;
        style?: string;
        innerStyle?: string;
    }>;
    widthSize?: string | number;
    heightSize?: string | number;
    controls?: {
        enabled: boolean;
        styled: "arrows" | "dots";
        customStyle?: string;
    };
    duration?: number;
    containerStyle?: React.CSSProperties;
    itemStyle?: React.CSSProperties;
}
declare const Carousel: React.FC<CarouselProps>;
export default Carousel;
