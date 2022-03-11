import React from 'react';

const Panel = ({ title, children }) => {
  return (
    <div className="footer-form-container">
      {children || (
        <>
          <div
            className="weight-form"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5>{title}</h5>
            <form>
              <div className="check-wrap">
                <h6 className="h6">النوع</h6>
                <div className="check-items">
                  <div className="check-item">
                    <input type="radio" name="gender" id="male" />
                    <label className="h6" htmlFor="male">
                      ذكر
                    </label>
                  </div>
                  <div className="check-item">
                    <input type="radio" name="gender" id="female" />
                    <label className="h6" htmlFor="male">
                      أنثي
                    </label>
                  </div>
                </div>
              </div>
              <div className="input-wrap">
                <label className="h6" htmlFor="height">
                  الطول
                </label>
                <input
                  type="number"
                  autoComplete="false"
                  min={0}
                  name="height"
                  id="height"
                  placeholder="سنتيمتر"
                />
              </div>
              <div className="input-wrap">
                <label className="h6" htmlFor="weight">
                  الوزن
                </label>
                <input
                  type="number"
                  autoComplete="false"
                  min={0}
                  name="weight"
                  id="weight"
                  placeholder="كيلوجرام"
                />
              </div>
              <div className="input-wrap">
                <label className="h6" htmlFor="age">
                  العمر
                </label>
                <input
                  type="number"
                  autoComplete="false"
                  min={0}
                  name="age"
                  id="age"
                  placeholder="العمر"
                />
              </div>
              <button className="btn btn-primary">إحسب</button>
            </form>
          </div>
          <div
            className="bmi-section"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h5>BMI</h5>
            <p>
              هي معادلة حسابية طبية تبين لكم كيفية حساب نسبه وزنك علي طولك بمعني
              اخر تعطيك نسبه تبين فيها إذا كان وزنك ملائم لطولك أو إن وزنك أقل
              من الطبيعي أو أكثر
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Panel;
