import { FC, useState } from 'react';
import ClipBoard from 'react-clipboard.js';

export const RegisterSuccess: FC<{ isArabic?: boolean }> = ({
  isArabic = false,
}) => {
  const [linkCopied, setLinkCopied] = useState<boolean>(false);

  return (
    <section
      className="section-content padding-y pb-5"
      id="success-view"
      style={isArabic ? { direction: 'rtl' } : {}}
    >
      <div
        className="card mx-auto register-form pt-5 pb-5"
        style={{ marginTop: '40px', marginBottom: '40px' }}
      >
        <div className="container">
          <header className="section-heading">
            <p className={'section-title '} style={{ fontSize: '30px' }}>
              {isArabic
                ? 'شكرًا لك على اهتمامك بأن تكون جزءًا منا. سيتصل بك فريقنا قريبًا!'
                : 'Thank you for your interest in being a part of Benyaan. Our team will soon contact you!'}
            </p>
          </header>
          <div className="row">
            <ClipBoard
              className="btn btn-primary m-3"
              data-clipboard-text="https://benyaan.com"
              onSuccess={(e) => {
                setLinkCopied(true);
                setTimeout(() => {
                  setLinkCopied(false);
                }, 2000);
              }}
            >
              <i className="fas fa-share-square mr-2"></i>
              {linkCopied
                ? isArabic
                  ? 'نسخ إلى الحافظة'
                  : 'Copied to clipboard'
                : isArabic
                ? 'انقر لنسخ رابط المشاركة'
                : 'Click to copy share link'}
            </ClipBoard>

            <a href="mail:example.com" className="btn btn-primary m-3">
              <i className="fas fa-envelope-open-text mr-2"></i>
              <span>{isArabic ? 'اتصل بنا' : 'Contact us'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
