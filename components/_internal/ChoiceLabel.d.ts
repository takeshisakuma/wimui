import { default as React } from '../../../node_modules/react';
/**
 * 選択肢の根（`Radio` / `Checkbox` の `<label>`）に付けるクラス。
 * `card` はカードの見た目、`top` は説明文があるときに入力を 1 行目へ揃える。
 */
export declare const choiceLabelClasses: {
    card: string;
    top: string;
};
export interface ChoiceLabelProps {
    /** The option's name */
    label: string;
    /** A second line that explains the option */
    description?: string;
    /** Id for the description, so the input can point at it with `aria-describedby` */
    descriptionId?: string;
    /** Id for the label text, so the input can take only the label as its name with `aria-labelledby` */
    labelId?: string;
}
/**
 * RadioGroup / CheckboxGroup の選択肢の文字（名前と、あれば説明文）。T365。
 *
 * 説明文は `<label>` の中に置く（カードのどこを押しても選べるように）。そのままでは説明文が
 * 名前にも入り、`aria-describedby` と合わせて 2 回読まれる（Chrome の計算で確かめた）ので、
 * 入力の名前は `aria-labelledby` で名前の文字だけを指し、説明文は `aria-describedby` で指す。
 *
 * Composition Contract:
 * - Managed by: RadioGroup / CheckboxGroup（`options[].description` と `variant`）
 * - Scroll lock: No
 */
export declare const ChoiceLabel: ({ label, description, descriptionId, labelId }: ChoiceLabelProps) => React.ReactElement;
