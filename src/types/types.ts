/*
  Типы для Todo-приложения:
  - Todo: структура задачи (id, текст, статус)
  - FilterType: варианты фильтрации задач
 */

export type TTodo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export type TFilterType = "all" | "active" | "completed";
