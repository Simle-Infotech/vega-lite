import { Field } from '../channeldef';
import { Encoding } from '../encoding';
import { ExtendedLayerSpec, FacetedUnitSpec, GenericSpec, UnitSpec } from '../spec';
import { GenericFacetSpec } from '../spec/facet';
import { GenericLayerSpec, NormalizedLayerSpec } from '../spec/layer';
import { SpecMapper } from '../spec/map';
import { GenericRepeatSpec } from '../spec/repeat';
import { NormalizedUnitSpec } from '../spec/unit';
import { NormalizerParams } from './base';
export declare class CoreNormalizer extends SpecMapper<NormalizerParams, FacetedUnitSpec, ExtendedLayerSpec> {
    private nonFacetUnitNormalizers;
    map(spec: GenericSpec<FacetedUnitSpec, ExtendedLayerSpec>, params: NormalizerParams): GenericSpec<import("../spec").GenericUnitSpec<Encoding<Field>, "circle" | "square" | "area" | "image" | "line" | "rect" | "rule" | "text" | "trail" | "point" | "geoshape" | "bar" | "tick" | import("../mark").MarkDef<import("../mark").Mark>>, GenericLayerSpec<import("../spec").GenericUnitSpec<Encoding<Field>, "circle" | "square" | "area" | "image" | "line" | "rect" | "rule" | "text" | "trail" | "point" | "geoshape" | "bar" | "tick" | import("../mark").MarkDef<import("../mark").Mark>>>>;
    mapUnit(spec: UnitSpec, params: NormalizerParams): NormalizedUnitSpec | NormalizedLayerSpec;
    protected mapRepeat(spec: GenericRepeatSpec<UnitSpec, ExtendedLayerSpec>, params: NormalizerParams): GenericRepeatSpec<NormalizedUnitSpec, NormalizedLayerSpec>;
    protected mapFacet(spec: GenericFacetSpec<UnitSpec, ExtendedLayerSpec>, params: NormalizerParams): GenericFacetSpec<NormalizedUnitSpec, NormalizedLayerSpec>;
    private mapUnitWithParentEncodingOrProjection;
    private mapFacetedUnit;
    private getFacetMappingAndLayout;
    mapLayer(spec: ExtendedLayerSpec, { parentEncoding, parentProjection, ...otherParams }: NormalizerParams): GenericLayerSpec<NormalizedUnitSpec>;
}
//# sourceMappingURL=core.d.ts.map