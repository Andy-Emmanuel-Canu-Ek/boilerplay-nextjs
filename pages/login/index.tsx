import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row } from 'react-bootstrap';
import { LoginParams } from 'api/types/auth';
import Button from 'components/common/Button';
import { userLogin } from 'api/services/auth';
import { useStorage } from 'hooks/useStorage';
import { FaChevronRight } from 'react-icons/fa';
import InputText from 'components/common/InputText';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'schemas/auth/loginSchema';
import { getUserToken } from 'shared/utils/functions';
import { MACROPAY_LOGO, SESSION_KEY_STORAGE, USER_KEY_STORAGE } from 'shared/constants/const';

const { Label, Group } = Form;

const Login = () => {
  const { saveStorageData: saveSession } = useStorage(SESSION_KEY_STORAGE);
  const { saveStorageData: saveUser } = useStorage(USER_KEY_STORAGE);

  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data: any) => {
    setIsLoading(true);
    await userLogin(data)
      .then(({ data }) => {
        const { datos } = data;

        if (datos?.estatusCode === 200) {
          const encodedToken = getUserToken(datos?.usuario, datos?.contrasenia);
          saveSession({ token: encodedToken });
          saveUser({
            name: datos?.usuario,
            password: datos?.contrasenia,
            token: encodedToken,
          });
          setIsLoading(false);
        } else {
          // toast.error("Usuario o contraseña inválidos", {
          //   duration: TOAST_TIMER,
          //   position: "top-right",
          // });
          reset();
          setIsLoading(false);
        }
      })
      .catch((error) => {
        // toast.error(error?.message ?? "Ha ocurrido un error inesperado :(", {
        //   duration: TOAST_TIMER,
        //   position: "top-right",
        // });
        reset();
        setIsLoading(false);
      });
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
        <InputText name="email" placeholder="Escribe tu correo" register={register} error={errors?.email} />
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
