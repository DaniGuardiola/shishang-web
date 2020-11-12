;(() => {
  // data
  // ----

  const MENU_DATA = [
    {
      name: 'Entrantes',
      items: [
        {
          name: 'Rollitos de primavera',
          price: 1.2
        },
        {
          name: 'Rollito de Vietnam (2 unidades)',
          price: 2.5
        },
        {
          name: 'Empanadilla china (8 unidades)',
          price: 4.25
        },
        {
          name: 'Tarta de calabaza (8 unidades)',
          price: 4.25
        },
        {
          name: 'Ensalada de la casa',
          price: 3.55
        },
        {
          name: 'Ensalada de alga, hongo, tofu, tomate, judiaverde, etc',
          price: 3.55
        }
      ]
    },
    {
      name: 'sopas',
      items: [
        {
          name: 'Sopa de tiburón vegetal',
          price: 3.25
        },
        {
          name: 'Sopa de miso',
          price: 3.25
        },
        {
          name: 'Sopa de maiz',
          price: 3.25
        },
        {
          name: 'Sopa de agripicante',
          price: 3.25
        },
        {
          name: 'Sopa de huevo',
          price: 3.25
        }
      ]
    },
    {
      name: 'arroces',
      items: [
        {
          name: 'Arroz tres delicias',
          price: 3.8
        },
        {
          name: 'Arroz integral con seta',
          price: 4.55
        },
        {
          name: 'Arroz blanco',
          price: 1.8
        },
        {
          name: 'Arroz frito con verduras',
          price: 4.05
        },
        {
          name: 'Tallarines tres delicias',
          price: 4.05
        },
        {
          name: 'Fideos chinos con verduras',
          price: 4.55
        }
      ]
    },
    {
      name: 'carnes vegetarianas',
      items: [
        {
          name: 'Arroz tres delicias',
          price: 3.8
        },
        {
          name: 'Arroz integral con seta',
          price: 4.55
        },
        {
          name: 'Arroz blanco',
          price: 1.8
        },
        {
          name: 'Arroz frito con verduras',
          price: 4.05
        },
        {
          name: 'Tallarines tres delicias',
          price: 4.05
        },
        {
          name: 'Fideos chinos con verduras',
          price: 4.55
        }
      ]
    },
    {
      name: 'pollo vegano',
      items: [
        {
          name: 'Pollo vegano al limon',
          price: 4.8
        },
        {
          name: 'Pollo vegano con almendras',
          price: 6.8
        },
        {
          name: 'Pollo vegano de gongbao',
          price: 6.8
        },
        {
          name: 'Pollo vegano al curry',
          price: 6.8
        },
        {
          name: 'Pollo sesamos vegano salteada',
          price: 6.8
        },
        {
          name: 'Muslo de pollo vegano frito/pieza',
          price: 1.8
        },
        {
          name: 'Filete de pollo vegano al coco rallado',
          price: 6.8
        }
      ]
    },
    {
      name: 'platos especiales',
      items: [
        {
          name: 'Gamba vegana frita',
          price: 5.25
        },
        {
          name: 'Gamba salteada con picante/ostras',
          price: 5.25
        },
        {
          name: 'Pato vegano con bambu y setas chinas',
          price: 6.8
        },
        {
          name: 'Pato vegano con salsa ostras',
          price: 6.8
        },
        {
          name: 'Pato asado',
          price: 6.8
        },
        {
          name: 'Familias feliz veganos',
          price: 6.25
        },
        {
          name: 'Bola de yi pin',
          price: 6.8
        },
        {
          name: '1/2 Pollo vegano tailandia',
          price: 6.8
        },
        {
          name: '1/2 pollo vegano con salsas chinas',
          price: 6.8
        },
        {
          name: 'Cordero vegano salteado',
          price: 6.8
        },
        {
          name: 'Farafe (15 piezas)',
          price: 5.3
        },
        {
          name: 'Bolitas tofu rebozada con verdura',
          price: 4.8
        },
        {
          name: 'Calameres fritos (10 unidades)',
          price: 5.8
        },
        {
          name: 'Aros de cebolla fritos',
          price: 4.25
        },
        {
          name: 'Wan tun frito',
          price: 3.8
        },
        {
          name: 'Sushi (8 piezas)',
          price: 3.8
        },
        {
          name: 'Tempura',
          price: 3.8
        },
        {
          name: 'Verduras salteadas',
          price: 3.8
        },
        {
          name: 'Tofu a la plancha',
          price: 4.4
        },
        {
          name: 'Tofu con salsa soja',
          price: 4.4
        },
        {
          name: 'Mapo tofu (sabor picante)',
          price: 4.4
        }
      ]
    },
    {
      name: 'Menús especiales (solo noches de lunes a jueves)',
      items: [
        {
          menu: true,
          name: 'Menú para 2 personas A',
          items: [
            'rollo de primavera(2)',
            'ensalada china',
            'arroz frito 3 delicias/tallarines',
            'pollo limón/ternera con salsa de ostras (cualquier sabores)\ncon bebida y postre'
          ],
          price: 16.2
        },
        {
          menu: true,
          name: 'Menú para 2 personas B',
          items: [
            'rollo de vietnamita (4)',
            'arroz frito 3 delicias/fideo chino',
            'gambas fritas (12)',
            'pollo estilo goa-bao/ternera bambú y setas chinas con bebida y postre'
          ],
          price: 18.2
        },
        {
          menu: true,
          name: 'Menú para 3 personas',
          items: [
            'rollo de primavera (3)',
            'ensalada china',
            'arroz frito 3 delicias/tallarines/fideo chino',
            'pollo con limón/cerdo agridulce',
            'ternera con salsa ostras (seta)',
            'gamba con bambú y setas chinas con bebida y postre'
          ],
          price: 29.2
        }
      ]
    }
  ]

  // menu generation
  // ---------------

  const MENU_STYLES = {
    header: [
      'text-center',
      'bg-menu-header',
      'hover:bg-menu-header-hover',
      'px-3',
      'pt-2',
      'pb-1',
      'mt-3',
      'font-bold',
      'text-xl'
    ],
    content: ['overflow-hidden', 'content'],
    item: ['lg:pl-8', 'lg:pr-10', 'px-3', 'py-3'],
    menuHeader: ['font-bold', 'bg-black', 'text-white', 'px-4', 'my-2']
  }

  function generateMenu () {
    const menuEl = document.querySelector('#menu')

    MENU_DATA.forEach(menuSection => {
      // menu section
      const sectionEl = document.createElement('div')
      sectionEl.className = 'menu-section'

      // header
      const sectionHeader = document.createElement('p')
      sectionHeader.classList.add('header', ...MENU_STYLES.header)
      sectionHeader.textContent = menuSection.name.toUpperCase()
      sectionHeader.setAttribute('data-id', menuSection.name)
      sectionEl.appendChild(sectionHeader)

      // content
      const sectionContent = document.createElement('div')
      sectionContent.classList.add(...MENU_STYLES.content)
      sectionContent.setAttribute('data-id', menuSection.name)
      sectionContent.setAttribute('collapsed', '')
      sectionContent.setAttribute('style', 'height: 0;')
      sectionEl.appendChild(sectionContent)

      // item list
      const sectionItems = document.createElement('ul')
      sectionContent.appendChild(sectionItems)

      // items
      menuSection.items.forEach(({ menu, name, items, price }) => {
        const itemEl = document.createElement('li')
        itemEl.classList.add(...MENU_STYLES.item)

        itemEl.innerHTML = menu
          ? // menu
            `<div class="flex ${MENU_STYLES.menuHeader.join(' ')}">
              <span>${name}</span>
              <div class="flex-grow"></div>
              <span>${price.toFixed(2)}€</span>
            </div>
            <p class="px-4">- ${items.join('<br>- ')}</p>`
          : // individual item
            `<div class="flex">
              <span>${name}</span>
              <div class="flex-grow"></div>
              <span>${price.toFixed(2)}€</span>
            </div>`

        sectionItems.appendChild(itemEl)
      })
      menuEl.appendChild(sectionEl)
    })
  }

  // menu collapsibles
  // -----------------

  const collapseTimeout = {}

  function toggleCollapsible (id) {
    const contentEl = document.querySelector(
      `.menu-section .content[data-id="${id}"]`
    )
    const collapsed = contentEl.hasAttribute('collapsed')

    if (!collapsed) {
      clearTimeout(collapseTimeout[id])
      delete collapseTimeout[id]
      const height = contentEl.querySelector('ul').getBoundingClientRect()
        .height
      contentEl.style.height = `${height}px`
      setTimeout(() => (contentEl.style.height = 0), 0)
      contentEl.setAttribute('collapsed', '')
    } else {
      const height = contentEl.querySelector('ul').getBoundingClientRect()
        .height
      contentEl.style.height = `${height}px`
      contentEl.removeAttribute('collapsed')
      collapseTimeout[id] = setTimeout(() => (contentEl.style.height = ''), 400)
    }
  }

  function setupMenuCollapsibles () {
    const headersEls = [...document.querySelectorAll('.menu-section .header')]
    headersEls.forEach(headerEl =>
      headerEl.addEventListener('click', e => {
        const id = e.currentTarget.getAttribute('data-id')
        toggleCollapsible(id)
      })
    )
  }

  // initialization
  // --------------

  function init () {
    generateMenu()
    setupMenuCollapsibles()
  }

  init()
})()
