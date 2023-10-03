import { useMemo } from "react";

export function useRoomFormOptions() {
  const bedTypeOptions = useMemo(() => {
    return [
      {
        label: "Одноместный",
        server: "single",
        value: {
          en: { bed_type: "single" },
          ru: { bed_type: "одноместный" },
        },
      },
      {
        label: "Двухместный",
        server: "double",
        value: {
          en: { bed_type: "double" },
          ru: { bed_type: "двухместный" },
        },
      },
    ];
  }, []);

  const roomTypeOptions = useMemo(() => {
    return [
      {
        label: "Одноместная",
        value: {
          server: "single",
          en: "Single room",
          ru: "Одноместная",
        },
      },
      {
        label: "Двухместная",
        value: {
          server: "double",
          en: "Double room",
          ru: "Двухместная",
        },
      },
      {
        label: "Трёхместная",
        value: {
          server: "triple",
          en: "Triple room",
          ru: "Трёхместная",
        },
      },
    ];
  }, []);

  const planOptions = useMemo(() => {
    return [
      {
        label: "Стандарт",
        value: {
          server: "standard",
          en: "Standard",
          ru: "Стандартный",
        },
      },
      {
        label: "Полулюкс",
        value: {
          server: "semi-lux",
          en: "Semi-lux",
          ru: "Полу-лукс",
        },
      },
      {
        label: "Люкс",
        value: {
          server: "lux",
          en: "Lux",
          ru: "Лукс",
        },
      },
    ];
  }, []);

  return {
    bedTypeOptions,
    roomTypeOptions,
    planOptions,
  };
}
