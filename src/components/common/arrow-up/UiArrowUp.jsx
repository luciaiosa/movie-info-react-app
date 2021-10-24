import './UiArrowUp.scss';

const UiArrowUp = ({ className }) => {
    const smoothScroll = (h) => {
        let i = h || 0;
        if (i < 20) {
            setTimeout(() => {
                window.scrollTo(0, i);
                smoothScroll(i + 10);
            }, 20);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className='flex arrow-up--container'>
            <div
                className={`arrow-up--button ${className}`}
                onClick={scrollToTop}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 48 48'
                >
                    <path d='M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z' />
                    <path d='M0 0h48v48H0z' fill='none' />
                </svg>
            </div>
        </div>
    );
};

export default UiArrowUp;