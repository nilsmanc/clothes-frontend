import NameErrorMessage from "@/components/elements/NameErrorMessage/NameErrorMessage";
import { useLang } from "@/hooks/useLang";
import { IAuthInput } from "@/types/authPopup";
import styles from "@/styles/auth-popup/index.module.scss";

const NameInput = ({ register, errors }: IAuthInput) => {
  const { lang, translations } = useLang();

  return (
    <div className="form__block">
      <input type="text" className="form__block__input" {...register("name")} />
      <NameErrorMessage
        errors={errors}
        className={styles.error_alert}
        fieldName="name"
      />
    </div>
  );
};

export default NameInput;
