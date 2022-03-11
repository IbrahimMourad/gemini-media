import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Panel from './Panel';

const FooterWrap = () => {
  const heighttRef = useRef();
  const [dHeight, setDHeight] = useState('500px');
  const [val, setVal] = useState(1);
  useEffect(() => {
    const height = heighttRef.current.clientHeight;
    console.log(height);
    if (height) {
      setDHeight(height + 'px');
    }
  }, [dHeight]);

  const renderPanel = () => {
    switch (val) {
      case 1:
        return <Panel title="إحسب وزنك المثالي" />;
      case 2:
        return <Panel title="إحسب سعراتك الحراريه" />;
      case 3:
        return <Panel title="حساب موعد الولادة المتوقع" />;
      default:
        return <Panel title="جدول التطعيمات" />;
    }
  };

  return (
    <footer>
      <div className="right-side" style={{ minHeight: dHeight || '400px' }}>
        <div
          className="bg-img"
          style={{ minHeight: dHeight || '400px' }}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="0"
        >
          <div className="wrapper">
            <img
              ref={heighttRef}
              className="img-fluid"
              src="images/footer.jpg"
              alt="footer img"
              style={{ height: dHeight || '400px' }}
            />
          </div>

          <ul className="list-unstyled">
            <li>
              <Button
                className={val === 1 && 'active'}
                onClick={() => setVal(1)}
              >
                إحسب وزنك المثالي
              </Button>
            </li>
            <li>
              <Button
                className={val === 2 && 'active'}
                onClick={() => setVal(2)}
              >
                إحسب سعراتك الحرارية
              </Button>
            </li>
            <li>
              <Button
                className={val === 3 && 'active'}
                onClick={() => setVal(3)}
              >
                حساب موعد الولادة المتوقع
              </Button>
            </li>
            <li>
              <Button
                className={val === 4 && 'active'}
                onClick={() => setVal(4)}
              >
                جدول التطعيمات
              </Button>
            </li>
          </ul>
        </div>
      </div>
      {renderPanel()}
    </footer>
  );
};

export default FooterWrap;
