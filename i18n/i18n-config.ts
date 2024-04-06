export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ja", "ar", "es", "ru", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const LANG_MAP = {
  en: {
    label: "English",
    icon: "🇺🇸",
  },
  ja: {
    label: "日本語",
    icon: "🇯🇵",
  },
  ar: {
    label: "العربية",
    icon: "🇸🇦",
  },
  es: {
    label: "Español",
    icon: "🇪🇸",
  },
  ru: {
    label: "Русский",
    icon: "🇷🇺",
  },
  zh: {
    label: "中文",
    icon: "🇨🇳",
  },
} as const;

/**
这段代码定义了一个`i18n`对象和一个`Locale`类型，并使用`as const`关键字将`i18n`对象的类型固定为其字面量类型。让我们逐步解释这段代码：

1. `export const i18n = { defaultLocale: "en", locales: ["en", "zh"] } as const;`：
   - 这行代码定义了一个常量`i18n`，它是一个对象。
   - 对象中包含两个属性：
     - `defaultLocale`：默认语言环境为英语（"en"）。
     - `locales`：支持的语言环境数组，包括英语（"en"）和中文（"zh"）。
   - `as const`关键字用于将`i18n`对象的类型固定为其字面量类型，这意味着`i18n`对象的属性值将不可变。

2. `export type Locale = (typeof i18n)["locales"][number];`：
   - 这行代码定义了一个类型别名`Locale`，表示支持的语言环境之一。
   - `(typeof i18n)`：获取`i18n`对象的类型。
   - `["locales"]`：访问`i18n`对象的`locales`属性，该属性是一个数组。
   - `[number]`：这是 TypeScript 中的索引类型。[number] 表示取数组中的索引类型，即表示数组的索引的类型。在这里，它表示数组的索引是数字类型，即数组的索引可以是数字。实际上，它表示取数组的索引范围，而不是具体的索引值。所以 [number] 并不是取数组中的元素类型，而是取数组的索引范围。
   - 因此，`Locale`类型是`"en" | "zh"`，表示支持的语言环境之一。

综上所述，这段代码定义了一个包含默认语言环境和支持的语言环境的对象`i18n`，以及一个表示支持的语言环境之一的类型`Locale`。
 */
