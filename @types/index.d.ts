declare namespace ScotGov {
    type BenefitNames = 'pip' | 'pipsrti' | 'dla' | 'srti' | 'ra' | 'common';
    type RAAppliedBenefits = 'raadp' | 'racdp';

    interface Title {
        title: string,
        caption?: string,
        metadata?: Metadata.Item[] | undefined,
    }

    interface DashboardItem {
        id: string,
        client: string,
        formType: keyof FormTypes,
        lastSaved: Date,
        resume?: string,
    }

    namespace FormTypes {
        interface Type {
            name: string,
            applyFor: string,
            hubTitle: string,
        }
    }

    interface FormTypes {
        [key:string]: FormTypes.Type,
    }

    interface Field<Type = unknown, Items = undefined> {
        type?: Type,
        name: string,
        id: string,
        label?: string,
        labelHidden?: boolean,
        reviewLabel?: string,
        text?: string,
        hintText?: string,
        value?: string,
        className?: string,
        required?: boolean,
        items?: Items,
        conditional?: {
            hidden: boolean,
            field: string | string[],
            value: string | string[],
            type?: string,
        },
        error?: string | boolean,
    }
}
