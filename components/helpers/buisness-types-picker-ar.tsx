import { ErrorMessage } from 'formik';
import { FC, useRef } from 'react';
import Select from 'react-select';
import { ErrorComponent } from '../../shared/container/input-field';

const buisnessTypes = [
  'البنوك – التمويل العقاري',
  'المكاتب العقارية',
  'الإستشارات الهندسية',
  ' شركات التصميم المعماري',
  'مكاتب التصميم الداخلي',
  'الهندسه الميكانيكية',
  'مكاتب تصميم الحدائق والزراعه',
  'المشاتل الزراعيه',
  'الهندسه الكهربائية والصرف الصحي',
  'أنظمة الحرائق',
  'أنظمة المراقبة والكاميرات',
  'أنظمة الطاقة الشمسية ',
  'المباني الخضراء ',
  'شركات التكييف والتبريد',
  'المصاعد والسلالم الاتوماتيكيه',
  'الألمنيوم والزجاج',
  'مشاغل الحديد والدرابزين',
  'أعمال الديكور',
  'المحاجر والطابوق',
  'مصانع الكابلات والمواسير',
  'الأدوات الكهربائيه',
  'الأدوات المنزلية',
  'الأجهزة الإلكترونية',
  'الأجهزه الكهربائية',
  'أدوات البناء (مسامير وخلافه)',
  'مظلات خارجية',
  'مواد البناء (رمال، اسمنت، أخشاب)',
  'التنظيفات',
  'الأثاث المنزلي',
  'معارض أدوات صحية',
  'الدهانات والأصباغ',
  'معارض السجاد',
  'المفروشات والستائر',
  'الخرسانه الجاهزه والأسقف',
  'الخشب والنجارة',
  'مكافحه الآفات والحشرات',
  'أنظمة التكنولوجيا',
  'تجهيزات المطابخ',
  'الأثاث المكتبي',
  'السيراميك والرخام',
  'خزانات المياه(الفايبر جلاس)',
  'الإضاءة الداخلية والخارجيه',
  'مصانع البورت كابن',
  'مستلزمات الديكور',
  'الأقفال والإسوارات',
  'العازل الحراري والمائي',
  'وكالات الآلات والمعدات',
  'شركات المقاولات (البناء)',
  'مواد البناء والقرين هاوس',
];

interface BuisnessTypePickerProps {
  setValues: any;
  values: any;
  name: string;
  title?: string;
}

const BuisnessTypePickerAR: FC<BuisnessTypePickerProps> = ({
  name,
  values,
  setValues,
  title = 'Business type',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleFocus() {
    let input = ref?.current;

    if (input) {
      input.focus();
    }
  }

  return (
    <div ref={ref} className="col form-group">
      <label>
        <span>{title}</span>
      </label>
      <Select
        options={buisnessTypes.map((each) => ({ value: each, label: each }))}
        isMulti={true}
        closeMenuOnSelect={false}
        id="react-select"
        placeholder="يختار"
        onChange={(e) => {
          const inps = e.map((each: any) => each.value);

          setValues({
            ...values,
            BusinessType: inps,
          });
        }}
      />
      <ErrorMessage
        name={name}
        component={({ children }) => (
          <ErrorComponent handleFocus={handleFocus}>{children}</ErrorComponent>
        )}
      />
    </div>
  );
};

export default BuisnessTypePickerAR;
