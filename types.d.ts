export {};

declare global {
    interface Window {
        config: {
            boxes: number;
            boxWidth: number;
        };
        handleScreenResize: () => void;
    }
}
