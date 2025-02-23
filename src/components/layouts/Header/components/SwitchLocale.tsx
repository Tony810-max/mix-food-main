'use client';

import { useCommonLocale } from '@/hooks/useCommonLocale';
import type { Locale } from '@/i18n/config';
import { getLocales } from '@/i18n/const';
import { getCookies } from '@/lib/cookie';
import { COOKIE_KEYS } from '@/utils/const';
import { Select, SelectItem } from '@heroui/select';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const SwitchLocale = () => {
  const t = useTranslations('Language');
  const locales = getLocales(t);
  const { isPending, handleChangeLocale } = useCommonLocale();
  const currentLocale = getCookies(COOKIE_KEYS.LOCALE);
  console.log('🚀 ~ SwitchLocale ~ currentLocale:', currentLocale);
  const [isDisable, setIsDisable] = React.useState<string>(currentLocale);

  const locale = currentLocale ? currentLocale : locales[0]?.key;

  const renderSelect = (locale: string) => {
    return (
      <div className='relative aspect-video w-10 rounded-[.25rem]'>
        <Image src={`/images/country/${locale}.png`} alt={locale} fill unoptimized className='object-cover' />
      </div>
    );
  };

  return (
    <Select
      disabledKeys={[isDisable]}
      disabled={isPending}
      aria-current={false}
      aria-label='locale'
      className='w-44'
      size='sm'
      radius='sm'
      defaultSelectedKeys={[locale]}
      onChange={(e) => {
        setIsDisable(e.target.value);
        handleChangeLocale(e.target.value as Locale);
      }}
      startContent={renderSelect(locale)}
    >
      {locales.map((locale) => (
        <SelectItem
          startContent={renderSelect(locale.key)}
          key={locale.key}
          className='text-[#99634D] hover:text-[#99634D60]'
        >
          {locale.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SwitchLocale;
