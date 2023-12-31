export default {
  projections: {
    ВозвратБилетаE: {
      покупатель: {
        __caption__: 'Покупатель',
        банковскийСчет: {
          __caption__: 'Банковский счет'
        }
      },
      датаПокупки: {
        __caption__: 'Дата покупки'
      },
      причинаВозв: {
        __caption__: 'Причина Возврата'
      }
    }
  },
  validations: {
    датаПокупки: {
      __caption__: 'Дата покупки'
    },
    причинаВозв: {
      __caption__: 'Причина Возврата'
    },
    покупатель: {
      __caption__: 'Покупатель'
    },
    покупИлиВозвБ: {
      __caption__: 'покупИлиВозвБ'
    }
  }
};
