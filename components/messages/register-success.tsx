import { FC } from 'react';

export const RegisterSuccess: FC = () => {
  return (
    <section className="section-content padding-y pb-5" id="success-view">
      <div
        className="card mx-auto register-form pt-5 pb-5"
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        <div className="container">
          <header className="section-heading">
            <h2 className="section-title">Thank you for registering</h2>
          </header>
        </div>
      </div>
    </section>
  );
};
