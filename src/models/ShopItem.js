export default class ShopItem {
  constructor(entity) {
    Object.assign(
        this,
        {
            brand: '',
            title: '',
            description: '',
            descriptionFull: '',
            price: 0,
            currency: '£'
        },
        entity
    )

  }
}