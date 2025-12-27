'use client';

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { useCommonLocale } from '@/hooks/useCommonLocale';
import type { Locale } from '@/i18n/config';
import { getLocales } from '@/i18n/const';
import { getCookies } from '@/lib/cookie';
import { COOKIE_KEYS } from '@/utils/const';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useMemo } from 'react';

const SwitchLocale = () => {
  const t = useTranslations('Language');
  const locales = useMemo(() => getLocales(t), [t]);
  const { isPending, handleChangeLocale } = useCommonLocale();
  const currentLocale = getCookies(COOKIE_KEYS.LOCALE);
  const initialLocale = currentLocale || locales[0]?.key;

  const [selectedLocale, setSelectedLocale] = React.useState<string>(initialLocale);
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedLabel = useMemo(() => locales.find((l) => l.key === selectedLocale)?.label, [locales, selectedLocale]);

  const handleValueChange = (val: string) => {
    setSelectedLocale(val);
    handleChangeLocale(val as Locale);
    setIsOpen(false);
  };

  return (
    <Select
      open={isOpen}
      onOpenChange={setIsOpen}
      value={selectedLocale}
      onValueChange={handleValueChange}
      disabled={isPending}
    >
      <SelectTrigger
        aria-label={t('language')}
        className='flex w-40 items-center gap-2 border-none bg-transparent p-0 focus:ring-0 data-[placeholder]:text-transparent'
      >
        <div className='relative h-6 w-8'>
          <Image
            src={`/images/country/${selectedLocale}.png`}
            alt={selectedLocale}
            width={32}
            height={20}
            className='object-cover'
          />
        </div>
        <span className='inline-block w-24 truncate font-medium text-[#99634D] text-sm'>{selectedLabel}</span>
      </SelectTrigger>

      <SelectContent
        key={selectedLocale} // Force remount when selectedLocale changes
        position='popper'
        side='bottom'
        sideOffset={4}
        className='max-h-60 min-w-[140px] overflow-y-auto rounded-sm border bg-white shadow-lg'
      >
        {locales.map((l) => (
          <SelectItem
            key={l.key}
            value={l.key}
            disabled={l.key === selectedLocale && isPending}
            className='text-[#99634D] hover:opacity-80 focus:text-[#99634D]'
          >
            <div className='flex items-center gap-2'>
              <div className='relative h-4 w-6'>
                <Image
                  src={`/images/country/${l.key}.png`}
                  alt={l.key}
                  width={24}
                  height={16}
                  className='object-cover'
                />
              </div>
              <span className='inline-block w-24 truncate'>{l.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SwitchLocale;
