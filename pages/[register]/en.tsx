import { Form, Formik } from 'formik';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { RegisterSuccess } from '../../components/messages/register-success';
import { DateFieldInput } from '../../shared/container/date-field';
import { InputField } from '../../shared/container/input-field';

export const api = 'https://benyaan.herokuapp.com/suppliers';
const BuisnessTypePicker = dynamic(
  () => import('../../components/helpers/buisness-type-picker'),
  {
    ssr: false,
  }
);

interface FormDataType {
  ProviderName: string;
  Email: string;
  CommercialRegistrationNumberIssueDate: string;
  CommercialRegistrationNumberExpiryDate: string;
  TradingLicenseNumberIssueDate: string;
  TradingLicenseNumberExpiryDate: string;
  ClientManagerAuthorizedSignatureName: string;
  PhoneNumber: string;
  CompanyAddress: string;
  BusinessType: string[];
}

const Register: NextPage = () => {
  const [commercialRegistrationFile, setCommercialRegistrationFile] =
    useState<File>();
  const [tradingLicenseNumberFile, setTradingLicenseNumberFile] =
    useState<File>();
  const [UploadyourCompanyProfilePDFFile, setUploadyourCompanyProfilePDFFile] =
    useState<File>();

  const [response, setReponse] = useState<string | null>(null);
  const [showSucess, setShowSuccess] = useState<boolean>(false);

  function handleSubmit(
    values: FormDataType,
    setSubmitting: (isSubmitting: boolean) => void
  ) {
    try {
      let data = {};

      const inputs: any = values;

      for (let each in inputs) {
        data = { ...data, [each]: inputs[each] };
      }

      const formData = new FormData();
      formData.append('data', JSON.stringify(data));

      if (commercialRegistrationFile) {
        formData.append(
          'files.CommercialRegistration',
          commercialRegistrationFile
        );
      }

      if (tradingLicenseNumberFile) {
        formData.append('files.TradingLicense', tradingLicenseNumberFile);
      }

      if (UploadyourCompanyProfilePDFFile) {
        formData.append(
          'files.UploadyourCompanyProfilePDF',
          UploadyourCompanyProfilePDFFile
        );
      }

      fetch(api, {
        method: 'POST',
        body: formData,
      })
        .then((res) => {
          setSubmitting(false);
          if (res.status === 200) {
            setShowSuccess(true);
          } else {
            throw new Error('Failed');
          }
        })
        .catch((e) => {
          setReponse('Something went wrong');
          setTimeout(() => {
            setReponse(null);
          }, 2000);
          setSubmitting(false);
        });
    } catch (error) {
      setSubmitting(false);
      setReponse('Something went wrong');
      setTimeout(() => {
        setReponse(null);
      }, 2000);
    }
  }

  if (showSucess) {
    return <RegisterSuccess />;
  }

  return (
    <div
      className="card mx-auto register-form"
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <article className="card-body" id="register-view">
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <h3 className="card-title highlight-color">Supplier Registration</h3>
          <Link href="/register/ar">
            <a>
              <i className="fas fa-language mr-1"></i> عربي
            </a>
          </Link>
        </header>
        <Formik
          initialValues={{
            ProviderName: '',
            Email: '',
            CommercialRegistrationNumberIssueDate: '',
            CommercialRegistrationNumberExpiryDate: '',
            TradingLicenseNumberIssueDate: '',
            TradingLicenseNumberExpiryDate: '',
            ClientManagerAuthorizedSignatureName: '',
            PhoneNumber: '',
            CompanyAddress: '',
            BusinessType: [],
            SocialMediaInstagram: '',
            SocialMediaSnapchat: '',
            SocialMediaTwitter: '',
          }}
          validate={(values) => {
            let errors: any = {};
            const defaultError = 'Please fill this field';

            if (!values.ProviderName) {
              errors.ProviderName = defaultError;
              return errors;
            }

            if (!values.Email) {
              errors.Email = defaultError;
              return errors;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
            ) {
              errors.Email = 'Invalid email address';
              return errors;
            }

            if (!values.CommercialRegistrationNumberIssueDate) {
              errors.CommercialRegistrationNumberIssueDate = defaultError;
              return errors;
            }

            if (!values.CommercialRegistrationNumberExpiryDate) {
              errors.CommercialRegistrationNumberExpiryDate = defaultError;
              return errors;
            }

            if (!values.TradingLicenseNumberIssueDate) {
              errors.TradingLicenseNumberIssueDate = defaultError;
              return errors;
            }

            if (!values.TradingLicenseNumberExpiryDate) {
              errors.TradingLicenseNumberExpiryDate = defaultError;
              return errors;
            }

            if (!values.BusinessType.length) {
              errors.BusinessType = defaultError;
              return errors;
            }

            if (!values.ClientManagerAuthorizedSignatureName) {
              errors.ClientManagerAuthorizedSignatureName = defaultError;
              return errors;
            }

            if (!values.PhoneNumber) {
              errors.PhoneNumber = defaultError;
              return errors;
            }

            if (!values.CompanyAddress) {
              errors.CompanyAddress = defaultError;
              return errors;
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            handleSubmit(values, setSubmitting);
          }}
        >
          {({ isSubmitting, values, setValues }) => {
            return (
              <Form id="supplier-form" noValidate>
                <InputField
                  type="text"
                  name="ProviderName"
                  inputClassName="form-control"
                  title="Service Provider Name"
                />
                <InputField
                  type="email"
                  name="Email"
                  inputClassName="form-control"
                  title="Email"
                />

                <div className="mb-4">
                  <label>
                    <span> Commercial Registration Number </span>
                  </label>
                  <div className="form-row">
                    <DateFieldInput
                      inputClassName="form-control"
                      name="CommercialRegistrationNumberIssueDate"
                      title="Issue Date"
                      setValues={setValues}
                      values={values}
                      maxDate={() => new Date()}
                    />
                    <DateFieldInput
                      inputClassName="form-control"
                      name="CommercialRegistrationNumberExpiryDate"
                      title="Expiry Date"
                      setValues={setValues}
                      minDate={() => new Date()}
                      values={values}
                      isDisabled={!values.CommercialRegistrationNumberIssueDate}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        name="CommercialRegistration"
                        type="file"
                        className="custom-file-input"
                        id="commercialRegistrationFile"
                        onChange={(e) => {
                          if (e.target.files?.length) {
                            setCommercialRegistrationFile(e.target.files[0]);
                          } else {
                            setCommercialRegistrationFile(undefined);
                          }
                        }}
                      />
                      <label
                        className="custom-file-label input-cut-text"
                        htmlFor="commercialRegistrationFile"
                        id="commercialRegistrationFilelabel"
                        style={{ fontSize: '13px' }}
                      >
                        {commercialRegistrationFile?.name || 'Upload file'}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label>
                    <span> Trading License Number </span>
                  </label>
                  <div className="form-row">
                    <DateFieldInput
                      inputClassName="form-control"
                      name="TradingLicenseNumberIssueDate"
                      setValues={setValues}
                      values={values}
                      title="Issue Date"
                      maxDate={() => new Date()}
                    />
                    <DateFieldInput
                      inputClassName="form-control"
                      name="TradingLicenseNumberExpiryDate"
                      setValues={setValues}
                      values={values}
                      title="Expiry Date"
                      isDisabled={!values.TradingLicenseNumberIssueDate}
                      minDate={() => new Date()}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        name="TradingLicense"
                        type="file"
                        className="custom-file-input"
                        id="commercialRegistrationFile"
                        onChange={(e) => {
                          if (e.target.files?.length) {
                            setTradingLicenseNumberFile(e.target.files[0]);
                          } else {
                            setTradingLicenseNumberFile(undefined);
                          }
                        }}
                      />
                      <label
                        className="custom-file-label input-cut-text"
                        htmlFor="tradingLicenseFilelabel"
                        id="tradingLicenseFilelabel"
                        style={{ fontSize: '13px' }}
                      >
                        {tradingLicenseNumberFile?.name || 'Upload file'}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-row mb-4">
                  <BuisnessTypePicker
                    setValues={setValues}
                    values={values}
                    name="BusinessType"
                  />
                </div>
                <header className="section-heading heading-line">
                  <h5 className="title-section text-uppercase" />
                </header>
                <header className="mb-4 ">
                  <h3 className="card-title highlight-color">
                    Company Information
                  </h3>
                </header>
                <div className="form-row">
                  <InputField
                    inputClassName="form-control"
                    name="ClientManagerAuthorizedSignatureName"
                    title="Client/ Manager/ Authorized Signature Name"
                    type="text"
                    containerClass="col-lg-6 col-12"
                  />
                  <InputField
                    inputClassName="form-control"
                    name="PhoneNumber"
                    title="Phone Number"
                    type="tel"
                    containerClass="col-lg-6 col-12"
                  />
                </div>

                <InputField
                  inputClassName="form-control"
                  name="CompanyAddress"
                  title="Company Address"
                  type="text"
                />

                <div className="">
                  <label htmlFor="">
                    <span> Social Media </span>
                  </label>
                  <div className="form-row">
                    <InputField
                      inputClassName="form-control"
                      name="SocialMediaInstagram"
                      title="Instagram"
                      type="text"
                      containerClass="social-inputs  col-sm-4 col-12"
                    />

                    <InputField
                      inputClassName="form-control"
                      name="SocialMediaSnapchat"
                      title="Snapchat"
                      type="text"
                      containerClass="social-inputs  col-sm-4 col-12"
                    />

                    <InputField
                      inputClassName="form-control"
                      name="SocialMediaTwitter"
                      title="Twitter"
                      type="text"
                      containerClass="social-inputs  col-sm-4 col-12"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="UploadyourCompanyProfilePDF">
                    <span>
                      Upload your Company Profile <small>(PDF only)</small>
                    </span>
                  </label>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        type="file"
                        id="companyProfile"
                        className="custom-file-input"
                        name="UploadyourCompanyProfilePDF"
                        accept=".pdf"
                        onChange={(e) => {
                          if (e.target.files?.length) {
                            setUploadyourCompanyProfilePDFFile(
                              e.target.files[0]
                            );
                          } else {
                            setUploadyourCompanyProfilePDFFile(undefined);
                          }
                        }}
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="UploadyourCompanyProfilePDF"
                        id="companyProfilelabel"
                        style={{ fontSize: '13px' }}
                      >
                        {UploadyourCompanyProfilePDFFile?.name || 'Upload file'}
                      </label>
                    </div>
                  </div>
                </div>

                <p className="text-danger text-center">{response}</p>

                <button
                  type="submit"
                  style={{ maxWidth: '350px' }}
                  className="btn btn-primary btn-block m-auto mt-5"
                  id="continue-btn-ref"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>
                      <i className="fas fa-spinner fa-spin mr-3"></i>
                      Please wait
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
                </button>
              </Form>
            );
          }}
        </Formik>
      </article>
    </div>
  );
};

export default Register;
