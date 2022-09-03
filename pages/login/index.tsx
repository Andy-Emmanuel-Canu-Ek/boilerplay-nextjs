import Image from 'next/image';
import toast from 'react-hot-toast';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import routes from 'shared/constants/paths';
import Button from 'components/common/Button';
import { FaChevronRight } from 'react-icons/fa';
import InputText from 'components/common/InputText';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUserToken } from 'shared/utils/functions';
import { loginSchema } from 'schemas/auth/loginSchema';
import { useSessionStorage } from 'hooks/useSessionStorage';
import { MACROPAY_LOGO, TOAST_TIMER, TO_DEFINE, USER_KEY_LOCAL_STORAGE } from 'shared/constants/const';
import { useRouter } from 'next/router';

const { Label, Group } = Form;

const Login = () => {
  const router = useRouter();
  const { saveSessionStorageData: saveUser } = useSessionStorage(USER_KEY_LOCAL_STORAGE);

  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data: TO_DEFINE) => {
    setIsLoading(true);
    saveUserSession(data);
  };

  const saveUserSession = (data: TO_DEFINE) => {
    if (data?.estatusCode === 200) {
      const encodedToken = getUserToken(data?.user, data?.password);
      // saveSession({ token: encodedToken });
      saveUser({
        name: data?.user,
        password: data?.password,
        token: encodedToken,
      });
      setIsLoading(false);
      router.replace(routes.dashboard);
    } else {
      toast.error('Usuario o contraseña inválidos', {
        duration: TOAST_TIMER,
        position: 'top-right',
      });
      reset();
      setIsLoading(false);
    }
  };

  return (
    <Form className="w-50 container overflow-auto" onSubmit={handleSubmit(onSubmitHandler)}>
      <Group className="col-12 text-center">
        <Image src={MACROPAY_LOGO} alt="welcome" className="" width={250} height={200} />
        <div className="h3 text-strong-blue">Macrolock</div>
      </Group>

      <Group className="d-flex flex-column py-4">
        <Label className="h5">
          Usuario<span className="text-danger">*</span>
        </Label>
        <InputText name="user" placeholder="Escribe tu correo" register={register} error={errors?.user} />
      </Group>

      <Group className="d-flex flex-column py-4">
        <Label className="h5">
          Contraseña<span className="text-danger">*</span>
        </Label>
        <InputText
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          register={register}
          error={errors?.password}
        />
      </Group>

      <Group className="py-4">
        <Button
          type="submit"
          text="Ingresar"
          isLoading={isLoading}
          position="right"
          icon={<FaChevronRight size={14} />}
        />
      </Group>
    </Form>
  );
};

export default Login;
