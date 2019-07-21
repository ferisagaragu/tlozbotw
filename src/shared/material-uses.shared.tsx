import React from 'react';
import { MaterialModel } from '../core/models/material.model';
import { MaterialUsesEnum } from '../core/enums/material-uses.enum';

export const materialUsesList = (material: MaterialModel) => {
  return (
    <ul>
      { material.addLife && <li>{ MaterialUsesEnum.ADD_LIFE }</li> }
      { material.sell && <li>{ MaterialUsesEnum.SELL }</li> }
      { material.improveArmor && <li>{ MaterialUsesEnum.IMPROVE_ARMOR }</li> }
      { material.elixir && <li>{ MaterialUsesEnum.ELIXIR }</li> }
      { material.defenseCooking && <li>{ MaterialUsesEnum.DEFENCE_COOKING }</li> }
      { material.atackCooking && <li>{ MaterialUsesEnum.ATACK_COOKING }</li> }
      { material.heartsCooking && <li>{ MaterialUsesEnum.HEARTS_COOKING }</li> }
      { material.ancestralWeapons && <li>{ MaterialUsesEnum.ANCESTRAL_WEAPONS }</li> }
      { material.heatResistanceCooking && <li>{ MaterialUsesEnum.HEAT_RESISTANCE_COOKING }</li> }
      { material.specificRecipes && <li>{ MaterialUsesEnum.SPECIFIC_RECIPES }</li> }
      { material.resistanceCooking && <li>{ MaterialUsesEnum.RESISTANCE_COOKING }</li> }
      { material.championWeapons && <li>{ MaterialUsesEnum.CHAMPION_WEAPONS }</li> }
      { material.resistanceHorse && <li>{ MaterialUsesEnum.RESISTANCE_HORSE }</li> }
      { material.resistanceCold && <li>{ MaterialUsesEnum.RESISTANCE_COLD }</li> }
    </ul>
  );
}