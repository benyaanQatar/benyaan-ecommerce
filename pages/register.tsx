import { Form, Formik } from 'formik';
import type { NextPage } from 'next';
import { useState } from 'react';
import { DateFieldInput } from '../shared/container/date-field';
import { InputField } from '../shared/container/input-field';

const Register: NextPage = () => {
  const [commercialRegistrationFile, setCommercialRegistrationFile] =
    useState<File>();
  const [tradingLicenseNumberFile, setTradingLicenseNumberFile] =
    useState<File>();
  const [UploadyourCompanyProfilePDFFile, setUploadyourCompanyProfilePDFFile] =
    useState<File>();

  return (
    <div
      className="card mx-auto register-form"
      style={{ marginTop: '40px', marginBottom: '40px' }}
    >
      <article className="card-body" id="register-view">
        <header className="mb-4 ">
          <h3 className="card-title highlight-color">Supplier Registration</h3>
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

            // Buisness type error

            if (!values.ClientManagerAuthorizedSignatureName) {
              errors.ClientManagerAuthorizedSignatureName = defaultError;
              return errors;
            }

            if (!values.CompanyAddress) {
              errors.CompanyAddress = defaultError;
              return errors;
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            // setSubmitting(true);
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
                    />
                    <DateFieldInput
                      inputClassName="form-control"
                      name="CommercialRegistrationNumberExpiryDate"
                      title="Expiry Date"
                      setValues={setValues}
                      values={values}
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
                    />
                    <DateFieldInput
                      inputClassName="form-control"
                      name="TradingLicenseNumberExpiryDate"
                      setValues={setValues}
                      values={values}
                      title="Expiry Date"
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
                  <div className="col form-group">
                    <label>
                      <span>Business type</span>
                    </label>
                    <input
                      name="BusinessType"
                      type="text"
                      className="form-control"
                      required
                    />
                  </div>
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
                    containerClass="col"
                  />
                  <InputField
                    inputClassName="form-control"
                    name="PhoneNumber"
                    title="Phone Number"
                    type="tel"
                    containerClass="col"
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
                      name="Snapchat"
                      title="SocialMediaSnapchat"
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

                <button
                  type="submit"
                  style={{ maxWidth: '350px' }}
                  className="btn btn-primary btn-block m-auto mt-5"
                  id="continue-btn-ref"
                >
                  Submit
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
