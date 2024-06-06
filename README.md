# KGU-AICS
경기대학교 AI컴퓨터공학부 홈페이지 프론트엔드 레포지토리입니다.

## What's inside?

이 레포지토리는 다음의 패키지와 앱을 포함하고 있습니다.

### Apps and Packages

- `web`: Next.js로 구성된 AI컴퓨터공학부 홈페이지입니다.
- `@repo/ui`: `shadcn/ui`로 구성된 KGU-AICS의 디자인 시스템입니다. 추후 AICS만의 고유한 테마로 변경할 예정입니다.
- `@repo/eslint-config`: 프로젝트에서 사용되는 `eslint` 설정을 모아뒀습니다.
- `@repo/typescript-config`: 모노레포에서 전반적으로 사용되는 `tsconfig.json`을 관리합니다.

모든 패키지와 앱은 100% [TypeScript](https://www.typescriptlang.org/)로 작성되었습니다.

### Utilities

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

### Build

```
cd aics-client
pnpm build
```

### Develop

```
cd aics-client
pnpm dev
```
