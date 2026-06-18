/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  type: 'diagnostic' | 'contact' | 'meeting';
}

export interface EcosystemNode {
  id: string;
  title: string;
  description: string;
  shortDesc: string;
  color: string;
  angle: number; // in degrees for circular layout
}

export interface ClimaMetric {
  category: string;
  score: number;
  previousScore: number;
  benchmark: number;
}

export interface NineBoxCell {
  x: number; // 1 to 3 (Potential: Low, Med, High)
  y: number; // 1 to 3 (Performance: Low, Med, High)
  label: string;
  description: string;
  color: string;
  textColor: string;
}
