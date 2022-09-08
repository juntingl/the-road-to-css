# the-road-to-css

The Road to CSS

## CSS Think，Build and Architect

- Atomic design
  - atoms => molecules => organisms => templates => pages
- Component driven design

- BEM（Block Element Modifier）

- Architect
  - Folder Structure | The 7-1 Pattern
    - 7 different folders for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.
    - base
    - components
    - layout
    - pages
    - themes
    - abstracts
    - vendors

## Sass

Sass 是一个 CSS 的预处理器，是 CSS 的扩展。

### 新增特性和功能

- Variables
- Nesting (嵌套)
- Operators
- Partials and imports
- Mixins
- Functions
- Extends
- Control directives

## Basic responsive design principles

基本的响应式设计原则。

### Fluid layouts

针对流畅的布局。

- 网页可以适配当前视口宽度以及高度
- 使用 `%` 单位，而不是像素（`px`）单位。
- 使用 `max-width` 而不是 `width` 进行限制

### Responsive units

响应式单元。

- 大多时候使用 `rem` 单位来设置长度。

### Flexible images

针对图片流畅布局设置。

- 图片不会像文本一样自动计算它的宽度。
- 大多时候用 `%` 来设置图片的大小，并且设置它的 `max-width`

### Media Queries

媒体查询来设置不同视口宽度时，其各个单元的布局，从而兼容各种设备。

### Layout types

- Float
- FlexBox 适合构建一维布局。
- CSS Grid 适合构建二维布局。
